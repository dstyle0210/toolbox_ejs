import {src, dest} from 'gulp';
function copySync(srcPath: string, destPath: string, options: { [key: string]: any } = {}): Promise<void> {
    const srcOptions = {base:'.',...options}; // 디렉토리 구조를 유지하기 위해 base 옵션 사용
    return new Promise((resolve, reject) => {
        src(srcPath, srcOptions)
            .pipe(dest(destPath))
            .on('end', ()=>{
                console.log(`[copySync] ${srcPath} to ${destPath}`);
                resolve();
            })
            .on('error', reject);
    });
};
export default copySync;