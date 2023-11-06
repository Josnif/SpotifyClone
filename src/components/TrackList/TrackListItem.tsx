import { Pressable, Image } from 'react-native'
import { Text, View } from '../../components/Themed';

import { Track } from '../../types';
import styles from './styles';

type TrackListItemProps = {
    track: Track;
  };
  
const TrackListItem = ({ track }: TrackListItemProps) => {
  const image = track.album?.images?.[0];
  return (
    <Pressable
      onPress={() => console.log('Playing track with id: ' + track.id)}
      style={styles.container}
    >
      {image && <Image source={{ uri: image.url}} style={styles.image} />}
      <View>
        <Text style={styles.title}>{track.name}</Text>
        <View>
          <Text style={styles.subtitle}>{track.artists[0]?.name}</Text>
          {/* {track?.artists?.map(artist => (
            <Text style={styles.subtitle}>{artist.name} &</Text>
          ))} */}
        </View>
      </View>
    </Pressable>
  )
}

export default TrackListItem