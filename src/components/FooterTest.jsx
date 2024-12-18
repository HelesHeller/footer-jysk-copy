import React from "react";
import Footer from "./components/Footer"; // Убедитесь, что путь к Footer правильный

const FooterTest = () => {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <main style={{ flex: 1, textAlign: "center", padding: "50px" }}>
                <h1>Тестирование Footer</h1>
                <p>Это тестовая страница для футера.</p>
            </main>
            <Footer />
        </div>
    );
};

export default FooterTest;
