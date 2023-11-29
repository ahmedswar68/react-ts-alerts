import { X } from "lucide-react"
import "./index.scss"
import { ReactNode } from "react";
import { AlertTypes } from "../../../types";
interface IProps{
    title: string;
    icon : ReactNode,
    type: AlertTypes,
    children? : ReactNode,
    description ?: string
}

const Alert = ({title,icon,type,children,description}: IProps) => {
    return (
        <div className={type}>
      <div className="alert-header">
        <div className="title">
          {icon}
          <h4>{title}</h4>
        </div>

        <X className="close" size={20} />
      </div>

      {children ? children : <p>{description}</p>}
    </div>
    )
}

export default Alert