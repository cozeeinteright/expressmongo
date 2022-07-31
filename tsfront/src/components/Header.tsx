import MyAppBar from './MyAppBar'

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
];

const Header =() => {
    return (
      <>
        <MyAppBar title="里山生物多様性プロジェクト" sections={sections}/>
    </>
    )
}
export default Header