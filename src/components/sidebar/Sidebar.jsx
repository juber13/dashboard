
import './sidebar.css'
import {HomeOutlined , Timeline , TrendingUp , Person , AttachMoney , BarChart , MailOutline , FeedbackOutlined ,  ChatBubbleOutline ,  WorkOutline , Error } from '@material-ui/icons';

const Sidebar = () => {
    return(
        <div className="sidebar">
            <div className="sidebarWarpper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">DashBoard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <HomeOutlined className="icon"/>
                             Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="icon"/>
                             Sales
                        </li>
                        <li className="sidebarListItem ">
                            <TrendingUp className="icon"/>
                             TimeLine
                        </li>
                    </ul> 
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Person className="icon"/>
                             Users
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoney className="icon"/>
                             Transactions
                        </li>
                        <li className="sidebarListItem">
                            <BarChart className="icon"/>
                             Reports
                        </li>
                    </ul> 
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline className="icon"/>
                             Mail
                        </li>
                        <li className="sidebarListItem">
                            <FeedbackOutlined className="icon"/>
                             FeedBack
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className="icon"/>
                             Messages
                        </li>
                    </ul> 
                </div>


                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutline className="icon"/>
                             Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="icon"/>
                             Analystic
                        </li>
                        <li className="sidebarListItem">
                            <Error className="icon"/>
                             Reports
                        </li>
                    </ul> 
                </div>
            </div>
        </div>
    )
}

export default Sidebar;