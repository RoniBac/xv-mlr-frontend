import Header from '../components/Header'
import PhotoCarousel from '../components/PhotoCarousel'
import DressCode from '../components/DressCode'
import Countdown from '../components/Countdown'
import Location from '../components/Location'
import GiftSuggestion from '../components/GiftSuggestion'
import SpotifyPlayer from '../components/SpotifyPlayer'
import SpecialMoments from '../components/SpecialMoments'
import GuestMessages from '../components/GuestMessages'
import RSVP from '../components/RSVP'
import InvitacionEvento from '../components/InvitacionEvento'
import InvitacionPrevista from '../components/InvitacionPrevista'
import Conmemorativos from '../components/conmemorativos'
import FooterContact from '../components/FooterContact'


function Invitation() {
  return (
    
    <div>
      <Header />
      <PhotoCarousel />
      <InvitacionEvento />
      <InvitacionPrevista />
      <Countdown />
      <DressCode />  
      <Location />
      <GiftSuggestion />
      <SpotifyPlayer />
      <SpecialMoments />
      <GuestMessages />
      <RSVP />
      <FooterContact />
    </div>
  )
}

export default Invitation
