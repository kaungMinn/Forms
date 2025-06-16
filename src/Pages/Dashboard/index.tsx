import Heading from "../../Components/Labels/Heading"
import { useAppSelector } from "../../Hooks/ReduxProvider"

const Dashboard = () => {
    const theme = useAppSelector((state) => state.theme);
    const { dashboardColor, primaryColor } = theme;
    const [dashboardBg, dashboardText] = dashboardColor;
    const [primaryBg] = primaryColor;
    return (
        <div className={`relative ${dashboardBg} ${dashboardText} p-5`}>
            <Heading heading="Dashboard" subHeading="What you can do here" />
            <div className="">
                <ul className={`${primaryBg} px-10 py-4 rounded-md shadow-md list-disc inline-block mt-5`}>
                    <li className="list-item body-font">
                        Customized UI, Customized Logics
                    </li>
                    <li className="list-item body-font">
                        Create, update, delete Customers
                    </li>
                    <li className="list-item body-font">
                        Change themes
                    </li>
                    <li className="list-item body-font">
                        Track Activities
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Dashboard