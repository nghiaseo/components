import './status-icon.css'
function StatusIcon(pros){
    return(
        <div className={'status-icon '+pros.status}></div>
    )
}
export default StatusIcon