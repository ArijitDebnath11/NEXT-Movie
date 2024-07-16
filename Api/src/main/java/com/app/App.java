package com.app;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class App {

    // Database URL, username, and password
    private static final String DB_URL = "jdbc:mysql://localhost:3306/App";
    private static final String USER = "root";
    private static final String PASS = "Som@1234";

    public static void main(String[] args) {
        Connection conn = null;
        PreparedStatement pstmt = null;

        try {
            // Step 1: Register JDBC driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Step 2: Open a connection
            System.out.println("Connecting to the database...");
            conn = DriverManager.getConnection(DB_URL, USER, PASS);

            // Step 3: Create a SQL query
            String sql = "INSERT INTO movies (title, ratings, price, vendors) VALUES (?, ?, ?, ?)";

            // Step 4: Create PreparedStatement object
            pstmt = conn.prepareStatement(sql);
            
            // Step 5: Set parameters
            pstmt.setString(1, "Inception");
            pstmt.setInt(2, 3);
            pstmt.setDouble(3, 78.0);
            pstmt.setString(4, "Netflix");

            // Step 6: Execute the query
            int rowsInserted = pstmt.executeUpdate();
            if (rowsInserted > 0) {
                System.out.println("A new movie was inserted successfully!");
            }

        } catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            // Step 7: Clean-up environment
            try {
                if (pstmt != null) pstmt.close();
                if (conn != null) conn.close();
            } catch (SQLException se) {
                se.printStackTrace();
            }
        }
    }
}
