"use client";
import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/components/cartpage/Cart.module.css';
import InstructionModal from './InstructionModa';

const CartContainer: React.FC = () => {
  const similarSlider = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [instruction, setInstruction] = useState('');
  const [instructionOutput, setInstructionOutput] = useState(false);
  const [coupen, setCoupen] = useState(false);
  const [coupenCode, setCoupenCode] = useState(false);
  const [modal, setModal] = useState(false);

  const rightClick = () => {
    if (similarSlider.current) {
      const newScrollLeft = scrollLeft + 600;
      similarSlider.current.scrollLeft = newScrollLeft;
      setScrollLeft(newScrollLeft);
    }
  };

  const leftClick = () => {
    const newScrollLeft = scrollLeft - 600;
    if (similarSlider.current) {
      similarSlider.current.scrollLeft = newScrollLeft;
      setScrollLeft(newScrollLeft);
    }
  };

  const showCoupenHandler = () => {
    setCoupen(!coupen);
  };

  const showCoupencodeHandler = () => {
    setCoupenCode(!coupenCode);
  };

  const modalHandler = () => {
    setModal(!modal);
  };

  const saveInstructionHandler = () => {
    setModal(!modal);
    setInstructionOutput(true);
    console.log(instruction);
  };

  const instructions = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInstruction(event.target.value);
  };

  const cancleInstruction = () => {
    setModal(!modal);
    setInstructionOutput(false);
    setInstruction('');
  };

  return (
    <>
      {modal && (
        <InstructionModal closeModal={modalHandler}>
          <div className={styles.instructionModalBox}>
            <h4>
              Type Instructions{' '}
              <Image
                src="/icons/close.svg"
                width={20}
                height={20}
                alt="close icon"
                unoptimized
                onClick={modalHandler}
              />
            </h4>
            <textarea
              name="user_instruction"
              id="user_instruction"
              cols={30}
              rows={10}
              placeholder="Enter Your Instructions"
              onChange={instructions}
            >
              {instruction}
            </textarea>
            <button onClick={cancleInstruction} type="button">
              Cancel
            </button>{' '}
            <button onClick={saveInstructionHandler}>Save</button>
          </div>
        </InstructionModal>
      )}

      <div className={styles.container}>
      <div className={styles.cartProduct}>
        <div className={styles.stepsContainer}>
          <p>Steps:</p>
          <div className={styles.stepsCount}>
                    <div className={styles.stepsRuler}></div>
                    <div className={styles.stepBox}>
                        <span className={styles.activeStep}>1</span>
                        <p>Cart</p>
                    </div>
                    <div className={styles.stepBox}>
                        <span>2</span>
                        <p>Address</p>
                    </div>
                    <div className={styles.stepBox}>
                        <span>3</span>
                        <p>Payment</p>
                    </div>
                </div>
          
        </div>
        <div className={styles.shopingContainerHeading}>
                    <h3>Shooping Cart (1 Item)</h3>
                    <p className={styles.total_price}>₹ 1800</p>
                </div>
                <div className={styles.shopingcartProduct}>
                    <Image src="/detailsImgMain1.webp" alt="product image" width={50} height={50} unoptimized priority/>
                    <div className={styles.shopingcartProductDetails}>
                        <div className={styles.shopingcartProductHeading}>
                            <h2>Surprise Room Decoration</h2>
                            <a href="#"><Image src="/icons/trash.svg" alt="trash icon" width={25} height={25} unoptimized /></a>
                        </div>
                        <p><span className={styles.cartproduct_price}>₹ 1800</span>+<span className={styles.addon_price}>₹ 600</span>= ₹ 2400</p>
                        <small><Image src="/icons/calendar-day.svg" alt="calender image" width={25} height={25} unoptimized/>Booking Date:   <span className={styles.bookingDay}>25 September, 2024</span></small>
                        <small><Image src="/icons/clock.svg" alt="clock Image" width={25} height={25} unoptimized/>Time: <span className={styles.time_between}>(6:00 PM - 8:00 PM)</span></small>
                        <button className={styles.InstructionDialougeBtn} onClick={modalHandler}>Write Your Instructions <Image src="/icons/edit-square.svg" alt="edit image" width={25} height={25} unoptimized/></button>
                        {instructionOutput && (
                        <div className={styles.instructionOutput}>
                        <div>{instruction}</div>
                    </div>
                        )}

                        
                    
                    </div>
                    
                </div>
                <div className={styles.addOnContent}>
                    <div className={styles.addOnContent_Wraper}>
                        <div className={styles.addOnContentHeading}>
                            <h4>Add On Item(1)</h4>

                            <div className={styles.addOnBox}>
                                <button>+ Add new</button>
                            </div>
                        </div>
                    <div className={styles.addOnContent_Product}>
                        <Image src="/addonproduct.webp" alt="add on product" className={styles.adOnProduct_Image} height={100} width={100}/>
                        <div className={styles.addProductDetails}>
                            <p><span className={styles.addOnBg}>Add On :</span> <span>Black Forest Cake</span></p>
                            <div><button>-</button><span>0</span><button>+</button></div>
                            <p><span className={styles.addonProductPrice}>₹ 600</span> X <span className={styles.addonProductCount}>1</span> = <span className={styles.addonTotal}>600</span></p>
                            <button><Image src="/icons/trash.svg" alt="trash icon" height={25} width={25} unoptimized/></button>
                        </div>
                    </div>
                </div>
                </div>
                <div className={styles.similarAddons}>
                 <h4>Similar Add Ons</h4>
                 <div className={styles.addOnsType}>
                    <p className={styles.activeAddonType}>All</p>
                    <p>Flowers</p>
                    <p>Cakes</p>
                    <p>Balloons</p>
                 </div>
                 <div className={styles.similarAddonsWrapper}>
                    <Image src="/icons/chevron-left.svg" alt="chevron image" height={25} width={25} className={styles.addOnLeft} onClick={leftClick}/>
                    <div className={styles.similarAddonsSlider} ref={similarSlider}>
                   <label htmlFor="" key="1001">
                    <Image src="/cake1.webp" alt="first similar product" width={100} height={100} unoptimized/>
                    <p>Chocolate Truffle Indulgence Cake</p>
                    <p>₹ 495</p>
                    <div><button>-</button><span>0</span><button>+</button></div>
                   </label>
                   <label htmlFor="" key="1002">
                    <Image src="/cake2.webp" alt="second similar product" width={100} height={100} unoptimized/>
                    <p>Chocolate Truffle Indulgence Cake</p>
                    <p>₹ 495</p>
                    <div><button>-</button><span>0</span><button>+</button></div>
                   </label>
                   <label htmlFor="" key="1003">
                    <Image src="/cake3.webp" alt="first similar product" width={100} height={100} unoptimized/>
                    <p>Chocolate Truffle Indulgence Cake</p>
                    <p>₹ 495</p>
                    <div><button>-</button><span>0</span><button>+</button></div>
                   </label>
                   <label htmlFor="" key="1004">
                    <Image src="/cake4.webp" alt="first similar product" width={100} height={100} unoptimized/>
                    <p>Chocolate Truffle Indulgence Cake</p>
                    <p>₹ 495</p>
                    <div><button>-</button><span>0</span><button>+</button></div>
                   </label>
                   <label htmlFor="" key="1005">
                    <Image src="/cake5.webp" alt="first similar product" width={100} height={100} unoptimized/>
                    <p>Chocolate Truffle Indulgence Cake</p>
                    <p>₹ 495</p>
                    <div><button>-</button><span>0</span><button>+</button></div>
                   </label>
                   <label htmlFor="" key="1006">
                    <Image src="/cake6.webp" alt="first similar product" width={100} height={100} unoptimized/>
                    <p>Chocolate Truffle Indulgence Cake</p>
                    <p>₹ 495</p>
                    <div><button>-</button><span>0</span><button>+</button></div>
                   </label>
                   <label htmlFor="" key="1007">
                    <Image src="/cake7.webp" alt="first similar product" width={100} height={100} unoptimized/>
                    <p>Chocolate Truffle Indulgence Cake</p>
                    <p>₹ 495</p>
                    <div><button>-</button><span>0</span><button>+</button></div>
                   </label>
                    </div>
                    <Image src="/icons/chevron-right.svg" alt="chevron image" height={25} width={25} className={styles.addOnRight} onClick={rightClick}/>
                 </div>
                </div>
      </div>
      <div className={styles.paymentDetails}>
      <div className={styles.discountDialouge}>
                <div className={styles.discountQuestion} onClick={showCoupenHandler}>
                    <p><Image src="/icons/green-sale-badge.svg" alt="green-sale-badge icon " height={30} width={30}  unoptimized/> Do You have a Coupon?</p>
                    <Image src={coupen?"/icons/minus.svg":"/icons/plus.svg"} alt="plus icon" className={styles.discountPopUpImg} height={20} width={20} unoptimized />
                </div>
                {coupen && (
                <div className={styles.discountBoxWrapper}>
                <form action="" method="post">
                <div className={styles.login_input}>
                    <input type="text" required placeholder='Enter Coupen code'/>
                </div>
                <input type="submit" value="Submit Coupen Code" />
                <div className={styles.availabelCoupenCodeHeading} onClick={showCoupencodeHandler}>
                    <p>Availabel Coupon Code <Image src="/icons/green-price-tag.svg" alt="green-price-tag icon" height={30} width={30} unoptimized/></p>
                    <Image src={coupenCode? "/icons/chevron-up.svg":"/icons/chevron-down.svg"} alt="chevron-up" height={20} width={20} unoptimized/>
                </div>
                {coupenCode && (
                <div className={styles.availableCoupenCode} >
                <p><span>1. Use <b>"NEWUSER"</b> Get ₹ 100 off</span> <button>Appply</button></p>
                <p><span>2. Use <b>"Decor24"</b> Get 2% off </span><button>Appply</button></p>
               </div>
                )}
            </form></div>
                )}
            </div>
            <div className={styles.priceDetailsContainer}>
                <h4>Price Details </h4>
                <p><span>Base Total</span><span><b>₹ 1800</b></span></p>
                <p><span>Add On Total</span><span><b>₹ 600</b></span></p>
                <p><span>Total Amount</span><span><b>₹ 2400</b></span></p>
                <p><span>Coupen Discount</span><span>-</span></p>
                <p><span><b>Amount To Pay</b></span><span><b>₹ 2400</b></span></p>
            </div>
            <div className={styles.proceedToBuyContainer}>
            <Link href="/productdetails">Proceed To Buy</Link>
           </div>
           <div className={styles.paymentSecurity}>
            <p><Image src="/icons/green-lock.svg" alt="green-lock icon" height={30} width={30}/>Secure Payment with RazorPay &amp; PayU</p>
            <p><Image src="/icons/green-verfied.svg" alt="green-verfied icon" height={20} width={20}/> Verified by <Image src="/RazorPay.webp" alt="RazorPay Image"  height={25} width={100}/>   <Image src="/PayU.webp" unoptimized priority alt="Pay U image" height={25} width={100}/></p>
            <p><Image src="/icons/green-smile.svg" alt="green-smile icon" height={25} width={25}/>Over 5 Millions Smiles Delivered</p>

        </div>
      </div>


      </div>
    </>
  );
};

export default CartContainer;
