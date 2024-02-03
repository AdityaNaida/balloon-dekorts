"use client";
import { useState } from "react";
import Link from "next/link";
import styles from '@/components/navbar/Navbar.module.css';
import MoreLinks from "./Morelinks";
import DynamicLinks from "./DynamicLinks";
import Modal from "./Modal";
import ModalBox from "./ModalBox";
import Image from "next/image";

const Navbar: React.FC = () => {
    const [locationPopup, setLocationPopup] = useState(false);
    const [menu, setMenu] = useState(false);
    const [search, setSearch] = useState(false);

    const ShowMenuHandler = () => {
        setMenu(!menu);
    }

    const showMobileSearch = () => {
        setSearch(!search);
    }

    const ShowDeliveryHandler = () => {
        setLocationPopup(true);
    }

    const HideDeliveryHandler = () => {
        setLocationPopup(false);
    }

    return (
        <>
            <div className={styles.header}>
                <div className={styles.navbar}>
                    <Image src="/menu-icon.webp" className={styles.menu_btn} height={30} width={30} alt="menu Btn" onClick={ShowMenuHandler} />
                    <Link href="/" className={styles.logo}><Image src="/logo.webp" height={50} width={250} alt="Logo" priority={false} /></Link>
                    <div className={styles.user_select_city} onClick={ShowDeliveryHandler}>Deliver To</div>
                    <div className={styles.searchDiv}><input type="text" placeholder="Search for a gift" required={true} /></div>
                    <div className={styles.linksContainer}>
                        <MoreLinks />
                        <div className={styles.searchPop}><Image alt="mobile search icon" height={25} width={30} src="/search.svg" onClick={showMobileSearch} /></div>
                    </div>
                </div>
                {search ? (
                    <div className={styles.searchDiv2}>
                        <input type="text" placeholder="Search for gifts..." />
                    </div>
                ) : false}
                <div className={styles.mobile_delivery_location} onClick={ShowDeliveryHandler}>
                    <div>Deliver To</div>
                </div>
                <div className={styles.dynamicLinks}>
                    <DynamicLinks offMenu={ShowMenuHandler}/>
                </div>
            </div>
            {locationPopup ? (
                <Modal offModel={HideDeliveryHandler}>
                    <ModalBox offModal={HideDeliveryHandler} />
                </Modal>
            ) : false}
            {menu ? (
                <div className={styles.dynamicLinks2}>
                    <Image src="/close.svg" alt="close dynamic links" height={30} width={30} onClick={ShowMenuHandler} />
                    <DynamicLinks offMenu={ShowMenuHandler} />
                </div>
            ) : false}
        </>
    );
}

export default Navbar;
