const Buttons=({label,color})=>{
    return(
        <button className={`px-4 py-2 bg-${color}-500 rounded-lg `}>{label}</button>
    );
};
export default Buttons;