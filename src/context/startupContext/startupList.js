import {createContext, react} from react;

const startupListContext = createContext(null);

const StartupListProvider = ({children}) => {
    const [startupList, setStartupList] = useState([]);

    const addStartup = (startup) => {
        setStartupList([...startupList, startup]);
    };

    const removeStartup = (startupId) => {
        setStartupList(startupList.filter((startup) => startup.id !== startupId));
    }

    return (
        <startupListContext.Provider value={{startupList, setStartupList}}>
            {children}
        </startupListContext.Provider>
    );
}
//edited by nitin
export {startupListContext, StartupListProvider};