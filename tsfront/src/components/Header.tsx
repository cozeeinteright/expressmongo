import MyAppBar from './MyAppBar'

const sections = [
  { title: 'ドキュメント', url: '/document' },
  { title: '寄附', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Business', url: '#' },
];

const Header =() => {
    return (
      <>
        <MyAppBar title="里山生物多様性プロジェクト" sections={sections}/>
    </>
    )
}
export default Header