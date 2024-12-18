import React from "react";
import "./Footer.css"; // Подключаем стили для футера

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Категорії товарів</h4>
                    <ul>
                        <li><a href="#category1">Категорія 1</a></li>
                        <li><a href="#category2">Категорія 2</a></li>
                        <li><a href="#category3">Категорія 3</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Інформація</h4>
                    <ul>
                        <li><a href="#about">Про нас</a></li>
                        <li><a href="#delivery">Доставка</a></li>
                        <li><a href="#contacts">Контакти</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>HYGGY</h4>
                    <p>Центральний офіс</p>
                    <button onClick={() => alert("Зворотній зв’язок")}>
                        Зворотній зв’язок
                    </button>
                </div>
                <div className="footer-section">
                    <h4>Оплата</h4>
                    <img src="/assets/images/payment-options.png" alt="Payment Options" />
                </div>
                <div className="footer-section">
                    <h4>Соціальні мережі</h4>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <img src="/assets/images/facebook.png" alt="Facebook" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <img src="/assets/images/instagram.png" alt="Instagram" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
