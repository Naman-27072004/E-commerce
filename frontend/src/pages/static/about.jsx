import { CiShop } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdAssuredWorkload } from "react-icons/md";
import ritik from "/assets/ritik.jpg";
import naman from "/assets/naman.jpg";
import shitij from "/assets/shitij.jpg";
import kushang from "/assets/kushang.jpg";


const About = () => {
  return (
    <div className="m-24">
      <span className="font-bold text-5xl flex justify-center">Our Story</span>
      <br />
      <div className="m-1 p-1">
        Welcome to Tech Bazaar, your premier online store for top-quality
        electronic items. From the latest smartphones and laptops to
        cutting-edge home appliances and accessories, Tech Bazaar offers a vast
        selection of products to meet all your tech needs. Our website is
        designed for easy navigation, allowing you to quickly find and compare
        the newest gadgets and best brands. With secure payment options, fast
        shipping, and dedicated customer support, shopping for electronics has
        never been easier. Discover unbeatable deals and the latest innovations
        at Tech Bazaar, where technology meets convenience.
      </div>
      <div className="flex justify-evenly ">
        <div className="border rounded p-5 m-5  hover:bg-orange-500  hover:text-white">
          <CiShop size={50} className="ml-3" />
          <span className="font-bold text-xl">16,547</span>
          <br />
          <span>Sellers active at our site</span>
          <br />
        </div>
        <div className=" border rounded p-5 m-5  hover:bg-orange-500  hover:text-white">
          <CiDollar size={50} className="ml-[20px]" />
          <span className="font-bold text-xl">9,27,564</span>
          <br />
          <span>Monthly sale</span>
          <br />
        </div>
        <div className="border rounded p-5 m-5  hover:bg-orange-500  hover:text-white">
          <MdOutlineShoppingBag size={50} className="ml-3" />
          <span className="font-bold text-xl">41,692</span>
          <br />
          <span>Customer active at our site</span>
          <br />
        </div>
        <div className="border rounded p-5 m-5  hover:bg-orange-500  hover:text-white">
          <FaSackDollar size={50} className="ml-3" />
          <span className="font-bold text-xl">71,48,250</span>
          <br />
          <span>Yearly sale</span>
          <br />
        </div>
      </div>
      <div className="flex justify-evenly m-1">
        <div className="m-1 p-1">
          <img className="rounded-full h-28" src={ritik} alt="Avatar" />
          <span>Ritik Kumar</span>
          <br />
          <span>Backend Developer</span>
          <div className="flex justify-evenly">
            <a href="https://twitter.com" target="blank">
              <CiTwitter />
            </a>
            <a href="https://instagram.com" target="blank">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="blank">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="m-1 p-1">
          <img className="rounded-full h-28" src={naman} alt="Avatar" />
          <span>Naman Gupta</span>
          <br />
          <span>Frontend Developer</span>
          <div className="flex justify-evenly">
            <a href="https://twitter.com" target="blank">
              <CiTwitter />
            </a>
            <a href="https://instagram.com" target="blank">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="blank">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="m-1 p-1">
          <img className="rounded-full h-28" src={shitij} alt="Avatar" />
          <span>Shitij Parmar</span>
          <br />
          <span>Designer</span>
          <div className="flex justify-evenly" target="blank">
            <a href="https://twitter.com" target="blank">
              <CiTwitter />
            </a>
            <a href="https://instagram.com" target="blank">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="blank">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="m-1 p-1">
          <img className="rounded-full h-28" src={kushang} alt="Avatar" />
          <span>Kushang Goel</span>
          <br />
          <span>Tester</span>
          <div className="flex justify-evenly">
            <a href="https://twitter.com" target="blank">
              <CiTwitter />
            </a>
            <a href="https://instagram.com" target="blank">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="blank">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly">
        <div className="border rounded p-5 m-5 hover:bg-orange-500  hover:text-white">
          <TbTruckDelivery size={50} className="ml-[100px]" />
          <span className="font-bold text-xl">FREE AND FAST DELIVERY</span>
          <br />
          Free delivery for all orders
        </div>
        <div className="border rounded p-5 m-5  hover:bg-orange-500  hover:text-white">
          <RiCustomerService2Fill size={50} className="ml-[100px]" />
          <span className="font-bold text-xl">24/7 CUSTOMER SERVICE</span>
          <br />
          Friendly 24/7 customer support
        </div>
        <div className="border rounded p-5 m-5  hover:bg-orange-500  hover:text-white">
          <MdAssuredWorkload size={50} className="ml-[100px]" />
          <span className="font-bold text-xl">MONEY BACK GUARANTEE</span>
          <br />
          We return money with in 30 days
        </div>
      </div>
    </div>
  );
};

export default About;
