use actix_cors::Cors;
use actix_web::{web, App, HttpServer, Result, HttpResponse, middleware::Logger};
use dotenv::dotenv;
use sqlx::{PgPool, postgres::PgPoolOptions};
use std::env;

mod config;
mod handlers;
mod models;
mod services;
mod middleware;
mod utils;

use config::Config;
use handlers::{auth, users, health};

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    // Load environment variables
    dotenv().ok();
    
    // Initialize logger
    env_logger::init();
    
    // Load configuration
    let config = Config::from_env().expect("Failed to load configuration");
    
    // Create database connection pool
    let pool = PgPoolOptions::new()
        .max_connections(10)
        .connect(&config.database_url)
        .await
        .expect("Failed to create database pool");
    
    // Run database migrations
    sqlx::migrate!("./migrations")
        .run(&pool)
        .await
        .expect("Failed to run database migrations");
    
    let server_host = config.server.host.clone();
    let server_port = config.server.port;
    
    println!("🚀 Server starting on http://{}:{}", server_host, server_port);
    println!("📚 Environment: {}", config.environment);
    
    // Start HTTP server
    HttpServer::new(move || {
        let cors = Cors::default()
            .allow_any_origin()
            .allow_any_method()
            .allow_any_header()
            .max_age(3600);
        
        App::new()
            .app_data(web::Data::new(pool.clone()))
            .app_data(web::Data::new(config.clone()))
            .wrap(cors)
            .wrap(Logger::default())
            .service(
                web::scope("/api/v1")
                    .service(
                        web::scope("/auth")
                            .route("/register", web::post().to(auth::register))
                            .route("/login", web::post().to(auth::login))
                    )
                    .service(
                        web::scope("/users")
                            .route("", web::get().to(users::get_users))
                            .route("/{id}", web::get().to(users::get_user))
                            .route("/{id}", web::put().to(users::update_user))
                            .route("/{id}", web::delete().to(users::delete_user))
                    )
                    .route("/profile", web::get().to(users::get_profile))
            )
            .route("/health", web::get().to(health::health_check))
    })
    .bind(format!("{}:{}", server_host, server_port))?
    .run()
    .await
}