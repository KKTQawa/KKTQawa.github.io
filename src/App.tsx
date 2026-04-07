import './App.css';

function App() {
  const repos = [
    {
      name: 'Sbuild',
      description: 'Make ECNU Great Again! Java项目，构建工具相关',
      url: 'https://github.com/KKTQawa/Sbuild',
      language: 'Java',
      languageColor: '#b07219'
    },
    {
      name: 'FallingCat',
      description: '一个物理仿真练习项目，使用Python开发',
      url: 'https://github.com/KKTQawa/FallingCat',
      language: 'Python',
      languageColor: '#3572A5'
    },
    {
      name: 'Algorithm-beginner-coding-notes',
      description: '算法入门学习笔记，C++实现',
      url: 'https://github.com/KKTQawa/Algorithm-beginner-coding-notes',
      language: 'C++',
      languageColor: '#f34b7d'
    }
  ];

  const skills = [
    'Flutter', 'uniapp', 'Vue', 'React', 'Python', 'C++',
    'Web开发', '嵌入式', 'ROS', '算法', 'Agent', 'RAG'
  ];

  const hobbies = [
    { name: 'AVG文字游戏', icon: '🎮' },
    { name: '解密游戏', icon: '🔐' },
    { name: '动画电影', icon: '🎬' },
    { name: '番剧', icon: '📺' }
  ];

  const timeline = [
    {
      year: '2024',
      title: '华东师范大学 计算机科学与技术',
      description: '本科二年级，积极参与各类项目与竞赛'
    },
    {
      year: '2024',
      title: '第十六届蓝桥杯软件赛 C++ A组',
      description: '省二等奖'
    },
    {
      year: '2024',
      title: '第十七届全国大学生数学竞赛',
      description: '上海赛区省三等奖'
    },
    {
      year: '2024',
      title: '百度之星',
      description: '参与参赛'
    },
    {
      year: '2024',
      title: '学习奖学金',
      description: '获得学习奖学金'
    }
  ];

  return (
    <>
      <header className="profile-header">
        <img 
          src="https://avatars.githubusercontent.com/u/184057233?v=4" 
          alt="Avatar" 
          className="avatar"
        />
        <div className="profile-info">
          <h1>安黔风</h1>
          <p className="username">@KKTQawa</p>
          <p className="bio">华东师范大学计算机科学与技术本科生 | 乐观积极，认真负责，勤奋好学</p>
        </div>
      </header>

      <div className="main-content">
        <aside className="sidebar">
          <div className="sidebar-section">
            <h3>联系方式</h3>
            <div className="contact-item">
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <a href="mailto:Ifmay@outlook.com">Ifmay@outlook.com</a>
            </div>
            <div className="contact-item">
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              <a href="https://github.com/KKTQawa" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          <div className="sidebar-section">
            <h3>专业技能</h3>
            <div className="skill-tags">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <h3>兴趣爱好</h3>
            <div className="hobby-grid">
              {hobbies.map((hobby, index) => (
                <div key={index} className="hobby-item">
                  <span>{hobby.icon}</span>
                  <span>{hobby.name}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <main className="content-area">
          <section className="section-card">
            <h2>
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
              个人经历
            </h2>
            <div className="timeline">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <h4>{item.title}</h4>
                  <p className="date">{item.year}</p>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="section-card">
            <h2>
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
              项目展示
            </h2>
            <div className="repo-grid">
              {repos.map((repo, index) => (
                <div key={index} className="repo-card">
                  <h3>
                    <a href={repo.url} target="_blank" rel="noopener noreferrer">
                      {repo.name}
                    </a>
                  </h3>
                  <p>{repo.description}</p>
                  <div className="repo-meta">
                    <span>
                      <span className="language-dot" style={{ background: repo.languageColor }}></span>
                      {repo.language}
                    </span>
                    <a href={repo.url} target="_blank" rel="noopener noreferrer">
                      查看详情 →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="section-card">
            <h2>
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/>
              </svg>
              自我评价
            </h2>
            <p>
              乐观积极，认真负责，勤奋好学。平时喜欢各种AVG文字和解密游戏，还有各种动画电影、番剧。
              保证积极配合团队工作，信息及时回复，不划水不摸鱼，尽己所能完成任务。
            </p>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
