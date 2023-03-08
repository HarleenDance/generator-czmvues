const Generator = require("yeoman-generator");

module.exports = class extends Generator {
    // prompting() {
    //     // promise
    //     return this.prompt([
    //         {
    //             type: 'input',
    //             name: 'title',
    //             message: 'You project names:',
    //             default: this.appname
    //         }
    //     ]).then(answers => {
    //         this.answers = answers
    //         console.log("answers", answers)
    //     })
    // }
    writing() {
        // this.fs.write(this.destinationPath("temp.txt"), Math.random().toString())
        // // const { projectName, name } = this.props;
        // // const temps = {
        // //     'index.html': { name: this.props.name }
        // // };
        // // 模板叫啥
        // const tepl = this.templatePath("index.html");
        // // 模板写啥
        // const output = this.destinationPath("index.html");
        // // 用户命令行交互的东西
        // const content = this.answers;

        // this.fs.copyTpl(tepl, output, content)


    }
}