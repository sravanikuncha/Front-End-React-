import menucss from './Menu.module.css'

export function Menu(props){

    const selectedMenu=props.value;
    
    return (
        <>
            <h3>IPOD.js</h3>
            <div className={menucss.menu}>
                <div className={selectedMenu=="coverflow"?menucss.selectedmenu:""}>
                    <span>Cover Flow</span>
                    <span className={selectedMenu=="coverflow"?menucss.visible:menucss.hide}><i class="fa-solid fa-greater-than"></i></span>
                </div>
                <div className={selectedMenu=="music"?menucss.selectedmenu:""}>
                    <span>Music</span>
                    <span className={selectedMenu=="music"?menucss.visible:menucss.hide}><i class="fa-solid fa-greater-than"></i></span>
                </div>
                <div className={selectedMenu=="games"?menucss.selectedmenu:""}>
                    <span>Games</span>
                    <span className={selectedMenu=="games"?menucss.visible:menucss.hide}><i class="fa-solid fa-greater-than"></i></span>
                </div>
                <div className={selectedMenu=="settings"?menucss.selectedmenu:""}>
                    <span>Settings</span>
                    <span className={selectedMenu=="settings"?menucss.visible:menucss.hide}><i class="fa-solid fa-greater-than"></i></span>
                </div>
                {/* <span className={selectedMenu=="coverflow"?menucss.selectedmenu:""}>CoverFlow</span>
                <span className={selectedMenu=="coverflow"?menucss.visible:menucss.hide}><i class="fa-solid fa-greater-than"></i></span><br/>
                <span className={selectedMenu=="music"?menucss.selectedmenu:""}>Music</span>
                <span className={selectedMenu=="music"?menucss.visible:menucss.hide}><i class="fa-solid fa-greater-than"></i></span><br/><br/>
                <span className={selectedMenu=="games"?menucss.selectedmenu:""}>Games</span>
                <span className={selectedMenu=="games"?menucss.visible:menucss.hide}><i class="fa-solid fa-greater-than"></i></span><br/><br/>
                <span className={selectedMenu=="settings"?menucss.selectedmenu:""}>Settings</span>
                <span className={selectedMenu=="settings"?menucss.visible:menucss.hide}><i class="fa-solid fa-greater-than"></i></span><br/><br/> */}
            </div>
        </>
    )
}