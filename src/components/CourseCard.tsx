import {
  FunctionComponent,
  useEffect,
  useRef,
} from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import ReactHlsPlayer from 'react-hls-player';

// import StarIcon from '../assets/star-icon.svg';
// import { Button } from '../UI/Button';
// import { useAppDispatch } from '../store/hooks';
// import { addProductToBasket } from '../store/features/Basket/basketSlice';
import { Course } from '../type/Courses';

const CardContainer = styled.div<{ format?: string }>`
  /* display: inline-flex; */
  /* flex-direction: column;
  align-items: center;
  justify-content: baseline; */
  width: 280px;
  height: 450px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  margin: 10px;
  box-sizing: border-box;
  /* padding: 0 0 20px; */
  /* border: 1px solid red; */

  &:hover {
    ${({ format }) => (format === 'card') && css`
    cursor: pointer;
  `}
  }

  ${({ format }) => (format === 'page') && css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: none;
    box-shadow: none;
    overflow: visible;
    margin: 0;
    padding: 0;
  `}
`;

const CardImage = styled.img<{ format?: string }>`
  width: 100%;
  height: 120px;
  object-fit: cover;
  overflow: hidden;

  ${({ format }) => (format === 'page') && css`
    width: 300px;
    height: 400px;
    object-fit: cover;
    overflow: visible;
    margin: 0 auto;
  `}
`;

const CardContent = styled.div<{ format?: string }>`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  /* padding: 20px; */

  ${({ format }) => (format === 'page') && css`
    padding: 50px;
  `}
`;

// const CardCategory = styled.div<{ format?: string }>`
//   font-size: 12px;
//   padding: 0;

//   ${({ format }) => (format === 'page') && css`
//     font-size: 20px;
//     padding: 10px;
//   `}
// `;

const CardTitle = styled.h2<{ format?: string }>`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 7px;
  max-width: 250px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  overflow-wrap: normal;
  height: 48px;
  padding: 0 20px;

  ${({ format }) => (format === 'page') && css`
    font-size: 50px;
    margin-top: 20px;
    margin-bottom: 40px;
    max-width: none;
    -webkit-line-clamp: inherit;
    text-align: center;
    overflow: visible;
    text-overflow: none;
    height: auto;
  `}
`;

const CardPlayer = styled.div<{ format?: string }>`
  height: 160px;

  ${({ format }) => (format === 'page') && css`
    height: auto;
  `}
`;

const CardDescription = styled.p<{ format?: string }>`
  font-size: 14px;
  text-align: left;
  height: 60px;
  text-overflow: ellipsis;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  overflow-wrap: break-word;
  padding: 5px 20px 0;

  ${({ format }) => (format === 'page') && css`
    font-size: 24px;
    text-align: center;
    max-height: min-content;
    text-overflow: clip;
    overflow: visible;
    -webkit-line-clamp: inherit;
  `}
`;

const CardPrice = styled.h3<{ format?: string }>`
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;

  ${({ format }) => (format === 'page') && css`
    font-size: 34px;
    font-weight: bold;
    margin-top: 20px;
  `}
`;

const CardRating = styled.div<{ format?: string }>`
  margin-top: 5px;
  text-align: left;
  align-self: flex-start;
  font-size: 14px;
  padding: 5px 20px 0;

  ${({ format }) => (format === 'page') && css`
  `}
`;

// const CardRatingCount = styled.span<{ format?: string }>`
//   font-size: 14px;
//   margin-left: 5px;
// `;

// const CardButtonBuy = styled(Button)<{ format?: string }>`
//   ${({ format }) => (format === 'page') && css`
//     font-size: 30px;
//     margin: 20px auto;
//   `}
// `;

interface CourseCardProps {
  course: Course;
  // eslint-disable-next-line react/require-default-props
  format?: 'card' | 'page';
}

export const CourseCard: FunctionComponent<CourseCardProps> = ({
  course,
  format = 'card',
}) => {
  const playerRef = useRef<HTMLVideoElement>(null);
  const {
    description,
    previewImageLink,
    title,
    id,
    rating,
  } = course;
  const link = course.meta?.courseVideoPreview?.link || '';

  // useEffect(() => {
  //   function handlePlay() {
  //     // Do something when the video starts/resumes playing
  //     const player = playerRef.current;

  //     if (player) {
  //       // eslint-disable-next-line no-console
  //       console.log('handlePlay', player.currentTime);
  //     }
  //   }

  //   const player = playerRef.current;

  //   if (player) {
  //     player.addEventListener('play', handlePlay);
  //   }

  //   return () => {
  //     if (player) {
  //       player.removeEventListener('play', handlePlay);
  //     }
  //   };
  // }, [playerRef]);

  useEffect(() => {
    function handlePause() {
      const player = playerRef.current;
      // Do some stuff when the video pause

      if (player) {
        // eslint-disable-next-line no-console
        console.log('handlePause', player.currentTime);
      }
    }

    const player = playerRef.current;

    if (player) {
      player.addEventListener('pause', handlePause);
    }

    return () => {
      if (player) {
        playerRef.current.removeEventListener('pause', handlePause);
      }
    };
  }, [playerRef]);

  // const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // const buyHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   e.stopPropagation();

  //   dispatch(addProductToBasket({
  //     product,
  //     count: 1,
  //   }));
  // };

  function playVideo() {
    const player = playerRef.current;

    if (format === 'card'
      && player && link) {
      // eslint-disable-next-line no-console
      console.log('playVideo');

      player.controls = !player.controls;
      player.volume = 0;
      player.play();
    }
  }

  function pauseVideo() {
    const player = playerRef.current;

    if (format === 'card'
      && player && (
      player.currentTime > 0
      && !player.paused
      && !player.ended
      && player.readyState > player.HAVE_CURRENT_DATA)) {
      // eslint-disable-next-line no-console
      console.log('pauseVideo', title);

      player.controls = !player.controls;
      player.pause();
    }
  }

  const cardToggle = () => {
    if (format === 'card') {
      pauseVideo();
      navigate(`course/${id}`, { replace: true });
    }
  };

  return (
    <CardContainer
      onClick={cardToggle}
      format={format}
      onMouseEnter={() => playVideo()}
      onMouseLeave={() => pauseVideo()}
    >
      <CardImage
        src={`${previewImageLink}/cover.webp`}
        alt={description}
        format={format}
      />
      <CardContent format={format}>
        <CardTitle format={format}>{title}</CardTitle>

        <CardPlayer format={format}>
          <ReactHlsPlayer
            playerRef={playerRef}
            src={link}
            autoPlay={false}
            controls
            width="100%"
            height="100%"
            hlsConfig={{
              startPosition: -1,
            }}
          />
        </CardPlayer>

        <CardDescription format={format}>{description}</CardDescription>
        <CardPrice format={format}>
          {/* {price} */}
        </CardPrice>

        <CardRating format={format}>
          Rating:&nbsp;
          {rating}
        </CardRating>

      </CardContent>
    </CardContainer>
  );
};
