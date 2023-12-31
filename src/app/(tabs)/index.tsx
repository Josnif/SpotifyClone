import { FlatList } from 'react-native';
import { Text, View } from '../../components/Themed';
import { tracks } from '../../../assets/data/tracks'
import TrackListItem from '../../components/TrackList/TrackListItem';

export default function HomeScreen() {  
  return (
    <FlatList 
      data={tracks}
      renderItem={({item}) => <TrackListItem track={item} />}
    />
  );
}