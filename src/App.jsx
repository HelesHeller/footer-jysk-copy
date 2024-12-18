
import Footer from "./components/Footer"; // Убедитесь, что путь верный
import "./App.css";

const App = () => {
    return (
        <div className="app" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <main style={{ flex: 1, textAlign: "center", padding: "50px" }}>
                <h1>Тестирование Footer</h1>
                <p>Это тестовая страница для футера.</p>
            </main>
            <Footer />
        </div>
    );
};

export default App;
