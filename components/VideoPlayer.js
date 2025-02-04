import {
  Player,
  DefaultUi,
  Video,
  Controls,
  DefaultControls,
  PlaybackControl,
  Control,
  DefaultSettings
} from '@vime/react';
import '@vime/core/themes/default.css';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/solid';

function ControlIcon({ icon, onClick }) {
  const HeroIcon = icon
  return (
    <Control onClick={onClick}>
      <HeroIcon className='text-white w-7' />
    </Control>
  )
}

export default function VideoPlayer({ src, poster, previousCallback, nextCallback }) {
  return (
    <Player>
      <Video version="latest" poster={poster} key={src}>
        <source src={src} type="video/mp4" />
      </Video>

      <DefaultUi noCaptions noControls>
        <DefaultControls hideOnMouseLeave activeDuration={1500} />

        <Controls fullWidth pin='center' style={{ '--vm-control-scale': 1.5 }} hideOnMouseLeave activeDuration={1500}>
          <div className='flex mx-auto items-center space-x-24 md:space-x-32'>
            <ControlIcon icon={ChevronDoubleLeftIcon} onClick={previousCallback} />
            <PlaybackControl hideTooltip />
            <ControlIcon icon={ChevronDoubleRightIcon} onClick={nextCallback} />
          </div>
        </Controls>
      </DefaultUi>
    </Player>
  );
}
