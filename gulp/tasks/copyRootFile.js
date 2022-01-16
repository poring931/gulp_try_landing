export const copyRootFile = () => {
    return app.gulp.src(app.path.src.filesRoot)
    .pipe(app.gulp.dest(app.path.build.filesRoot))
}