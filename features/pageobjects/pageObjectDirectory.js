import loginPage from './login/loginPage.object'
import gamesPage from './games/gamesPage.object'


const login = new loginPage()
const games = new gamesPage()

export {default as loginPage} from './login/loginPage.object'
export {default as gamesPage} from './games/gamesPage.object'

export default {
  login,
  games,
}
