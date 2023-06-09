const Body = () => {
  const [resList, setresList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("swiggy-link-here"); // promise

    const json = await data.json(); //promise resolved

    setresList(set - to - json - data);

    console.log("hi");
  };

  // conditional rendering
  return resList.length === 0 ? <Shimmer /> : <renderResList-here />;
};

export default Body;

/*

first Shimmer will be rendered, then
useEffect will be called, then
fetchData will be called, then
promise will be resolved and then
 resList is  set to update (but not updated yet), then 
console.log('hi') will be printed and any operation , let say a for-loop that runs from 1 to 1e9 , 
will be executed first (while executing this, resList is still empty) and after this operation has finished , 
then only Body function is called with updated value of resList and ResList is rendered. 

*/
