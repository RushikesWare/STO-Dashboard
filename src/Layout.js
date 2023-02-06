import { Sidebar, Menu, SubMenu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate
} from 'react-router-dom';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Application from '../src/json_server/ApplicationsList.json';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
function Layout(props) {
    const navigate= useNavigate();
    const { collapseSidebar } = useProSidebar();
    const onCollapse = (isCollapse) => {
        props.changeBodyLeftMargin(isCollapse)
    }
    return (
        
        <div style={{ display: 'inline-block', width: '80px', minHeight: '100vh' }}>
            <Sidebar defaultCollapsed="false" style={{height: '100vh'}} onLoad={() => { collapseSidebar(false); onCollapse(false) }} onMouseOver={() => { collapseSidebar(false); onCollapse(false) }} onMouseLeave={() => { collapseSidebar(true); onCollapse(true) }}>
                <Menu menuItemStyles={{
                    button: ({ level, active, disabled }) => {
                        // only apply styles on first level elements of the tree
                        if (level === 0)
                            return {
                                color: disabled ? '#000' : '#fff',
                                backgroundColor: '#1976d2',
                            };
                    },
                }}>
                {/* <img style={{width: '20px'}} src = {Logo} alt="My Happy SVG"/> */}
                     <MenuItem icon={<DashboardIcon/>} onClick={() => navigate("/Dashboard")}> <span className='sto-logo'>STO </span><span>Dashboard</span></MenuItem>
                    <SubMenu label="Applications" icon={<AnalyticsIcon />}>
                        {

                            Application && Application.map(data => {
                                return (
                                    <MenuItem icon={<ScreenshotMonitorIcon />}>
                                        <Link to={data.to} state={data.state}>{data.applicationName}</Link>
                                    </MenuItem>
                                )
                            })
                        }
                    </SubMenu>
                    <MenuItem icon={<DashboardCustomizeIcon />} onClick={() => navigate("/allInOneDashboard")} > All-in-One Dashboard</MenuItem>
                    <MenuItem icon={<SettingsApplicationsIcon />} onClick={() => navigate("/settings")}> Settings</MenuItem>
                    <MenuItem icon={<ExitToAppIcon />} onClick={() => navigate("/signout")}> Signout</MenuItem>
                </Menu>
            </Sidebar>
        </div>
    );
}

export default Layout;