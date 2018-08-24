import { newsState } from './newsState'
import { userState } from './userState'
export default interface storeType {
  newsState: newsState;
  userState: userState;
}