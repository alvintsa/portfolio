 // Open a database connection
 const db = new sqlite3.Database("mydatabase.db", (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Database connection successful');
    }
});