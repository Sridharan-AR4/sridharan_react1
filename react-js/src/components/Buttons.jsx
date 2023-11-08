const Buttons=({label,colorl})=>{
    return(
        <button className={`px-4 py-2 bg-${colorl}-500 rounded-lg`}>{label}</button>
    );
};
export default Buttons;