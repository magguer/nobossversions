//React
import { useContext, useState } from "react";
// Componentes
import Calendar from "react-calendar";
import SubComponentsBody2 from "../../../Secondaries/SubComponentsBody2";
//Contexto
import { ProjectContext } from "../../../../context/ProjectProvider";

const AgendaBody = ({ agendaBodyVisible, onClose }) => {

  const { project } = useContext(ProjectContext);
  const [date, setDate] = useState(new Date());
  const onChange = (date) => setDate(date);

  return (
    <SubComponentsBody2 link={"/management"} textTitle="Agenda de">
      <div className="m-10 h-[360px] flex justify-center">
        <Calendar onChange={onChange} value={date} />
      </div>
    </SubComponentsBody2>
  );
};

export default AgendaBody;
