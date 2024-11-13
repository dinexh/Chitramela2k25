-- Create database
CREATE DATABASE chitramela;
USE chitramela;

-- Users table
CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL UNIQUE, 
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    role ENUM('Admin') NOT NULL, 
    active BOOLEAN DEFAULT 1, 
    upload_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    RefreshToken VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (id)
);

-- Insert demo admin user
INSERT INTO users (username, name, password, email, role, active) 
VALUES 
('admin', 'Administrator', 'admin123', 'admin@chitramela.com', 'Admin', 1),
('superadmin', 'Super Admin', 'super123', 'super@chitramela.com', 'Admin', 1);