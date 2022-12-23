import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./new-sidebar.module.css";
import style from "../routes/sidebar.module.css"
import NewNote from "../routes/NewNote";
import SideItems from "./SideItems";

const SideBar = ({ width = 250, setMainSize, mainSize }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [plan, setPlan] = useState("");
  const side = useRef();
  const [savePlan, setSavePlan] = useState([]);
  const [sidebar,setSidebar] = useState(true);
 
  const showModal = () => {
    setModalOpen(true);
  };
  const toggleSetting = () => {
    setMainSize(true);
    console.log(mainSize);
    
    setSidebar(!sidebar);
    setToggled(!toggled);
  };
 
  return (
    <div>
      <button className={sidebar ? style.openbutton:style.closebutton} onClick={toggleSetting}>{sidebar ? 'O':'X'}</button>
      <nav
        ref={side}
        className={toggled ? styles.side_bar__show : styles.side_bar}
      >
        <div className={styles.side_bar__main}>
          <Link to={"/"}>PLAN LIST</Link>
        </div>
        <SideItems savePlan={savePlan} setSavePlan={setSavePlan  } />
        <div className={styles.side_bottom}>
          <div className={styles.bottom_content}>
            <span className="fa-solid fa-plus"></span>
            <span onClick={showModal}>새로만들기</span>
          </div>
        </div>
      </nav>
      <div>
        {modalOpen && (
          <NewNote
            setModalOpen={setModalOpen}
            setPlan={setPlan}
            plan={plan}
            setSavePlan={setSavePlan}
            savePlan={savePlan}
          />
        )}
      </div>
    </div>
  );
};

const comp = (prev, next) => {
  return prev.savePlan === next.savePlan;
};
export default React.memo(SideBar, comp);
