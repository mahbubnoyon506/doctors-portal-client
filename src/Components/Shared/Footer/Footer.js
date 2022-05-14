import React from 'react';
import { FaRegCopyright } from "react-icons/fa";
import footerBg from '../../Utilities/assets/images/footer.png'


const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <section style={{background: `url(${footerBg})`}}>
            <footer className="footer p-10  text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <h2 className='text-center pb-5'><FaRegCopyright className='inline'></FaRegCopyright> Copyright {year}. All right reserved.</h2>
        </section>
    );
};

export default Footer;