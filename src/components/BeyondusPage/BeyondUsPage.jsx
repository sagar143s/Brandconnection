import Beyondbrand from "./beyondbrand";
import Beyondusbg from "./beyondusbg";
import Clientsay from "./clientsay";
import Counter from "./counter";
import Team from './team'
import History from '../HistoryPage/HistoryPage'


function BeyondUsPage() {
  return (
    <div>
      <Beyondusbg />
      <Beyondbrand />
      <Counter />
      {/* <Clientsay /> */}
      <History/>
      <Team/>
      
    </div>
  );
}

export default BeyondUsPage;
