
import {
 Profiles
} from '@lens-protocol/react-native-lens-ui-kit'
 
const Profile = ({
  navigation
}) => {
  return (
      <Profiles
        onProfilePress={
          profile => navigation.navigate(
            "ProfileView", { profile }
          )
        }
      />    
  );
}

export default Profile
