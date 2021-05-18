import { FaLinkedin } from 'react-icons/fa';
import '../../assets/styles/footer.scss';

export function Footer() {
    return (
        <footer>
            <p>&copy; 2021 - Viviane Bresolin</p>
            <a href="https://www.linkedin.com/in/vivianebresolin/" target="_blank" rel="noreferrer">
                <FaLinkedin />
            </a>
        </footer>
    );
}