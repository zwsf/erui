module.exports = function (plop) {
	plop.setGenerator('component', {
		description: '创建组件',
		prompts: [
			{
				type: 'input',
				name: 'componentName',
				message: '组件名(首字母必须大写)',
				validate: name => {
					return /^[A-Z]/.test(name)
				},
			},
		],
		actions(data) {
			const pkgName = data.componentName.toLowerCase()

			return [
				{
					type: 'add',
					force: true,
					path: `packages/${pkgName}/index.ts`,
					templateFile: 'template/component/index.hbs',
				},
				{
					type: 'add',
					force: true,
					path: `packages/${pkgName}/src/index.vue`,
					templateFile: 'template/component/src/index.hbs',
				},
				{
					type: 'add',
					force: true,
					path: `packages/${pkgName}/__tests__/${pkgName}.spec.ts`,
					templateFile: 'template/component/__tests__/index.hbs',
				},
				{
					type: 'add',
					force: true,
					path: `packages/${pkgName}/package.json`,
					templateFile: 'template/component/package.hbs',
					data: {
						pkgName,
					},
				},
			]
		},
	})
}
