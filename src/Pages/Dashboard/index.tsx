import UnderConstructionIcon from "../../Components/Icons/AnimatedIcons/Dashboard/UnderConstructionIcon"

const Dashboard = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="w-[50rem] relative">
                <h4 className="absolute top-20 left-1/2 -translate-x-1/2">
                    This Page is under construction!
                </h4>

                <UnderConstructionIcon />

            </div>
        </div>
    )
}

export default Dashboard