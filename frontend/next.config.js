// const withSass = require('@zeit/next-sass');

// module.exports = withSass();

// const path = require('path');

// module.exports = {
// 	sassOptions: {
// 		includePaths: [path.join(__dirname, 'styles')],
// 	},
// };

const path = require('path');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
	/* bydefault config  option Read For More Optioshere https://github.com/vercel/next-plugins/tree/master/packages/next-sass*/
	cssModules: true,
});

module.exports = {
	/* Add Your Scss File Folder Path Here */
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
};
