import { useEffect, useState } from "react";
import { MENU_API } from "../utils/contants";

const useRestrauntMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [resId]);
    const fetchData = async () => {
        try {
            const data = await fetch(`${MENU_API}${resId}`);
            const json = await data.json();
            // console.log(json);
            setResInfo(json.data);
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    return resInfo;
};

export default useRestrauntMenu;
