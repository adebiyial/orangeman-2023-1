export default function TopNav() {
	return <div className="top-nav">
		<div className="nav">
			<div className="logo-wrap">
				<div className="logo"></div>
				<h1 className="title">Orangeman</h1>
			</div>
			<nav>
				<a href="blog">Blog</a>
				<a href="/guides">Guides</a>
				<a href="/lab">Lab</a>
				<a href="/publications">Publications</a>
			</nav>
			<a href="https://t.me/toyef">Let&apos;s chat</a>
		</div>
		<style jsx>
			{`
				.top-nav {
					box-shadow: inset 0 -1px var(--border, red);
				}

				.nav {
					display: flex;
					align-items: center;
					justify-content: space-between;
					max-width: var(--landing-page-max-width);
					margin: 0 auto;
				}

				.logo-wrap {
					display: flex;
					align-items: center;
					gap: 10px;
				}

				.logo {
					--size: calc(0.56 * var(--nav-height, ));
					width: var(--size);
					height: var(--size);
					background-color: var(--yellow, red);
					border-radius: 50%;
				}

				.title {
					font-size: 24px;
					font-family: Staatliches;
				}

				nav a {
					padding: 6px 12px;
				}

				a {
					text-decoration: none;
					font-size: 1rem;
					line-height: 1;
					font-weight: 600;
				}

				a[href^=https] {
					text-decoration: underline red 2px;
					text-underline-offset: 5px;
				}
			`}
		</style>
	</div>
}