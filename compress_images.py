from PIL import Image
import os
from pathlib import Path

def compress_images(input_folder, output_folder=None, quality=75, max_width=1920):
    """
    压缩文件夹中的所有图片
    
    参数:
        input_folder: 输入文件夹路径
        output_folder: 输出文件夹路径（如果为None，则覆盖原文件）
        quality: JPEG压缩质量 (1-100)，默认75（更激进的压缩）
        max_width: 最大宽度限制，默认1920px
    """
    # 支持的图片格式
    supported_formats = {'.jpg', '.jpeg', '.png', '.bmp', '.webp', '.tiff'}
    
    # 创建输出文件夹
    if output_folder:
        Path(output_folder).mkdir(parents=True, exist_ok=True)
    
    total_original = 0
    total_compressed = 0
    processed_count = 0
    
    # 遍历输入文件夹
    for filename in os.listdir(input_folder):
        file_path = os.path.join(input_folder, filename)
        
        # 跳过非文件
        if not os.path.isfile(file_path):
            continue
        
        # 获取文件扩展名
        file_ext = os.path.splitext(filename)[1].lower()
        
        # 只处理支持的图片格式
        if file_ext not in supported_formats:
            continue
        
        try:
            # 获取原始文件大小
            original_size = os.path.getsize(file_path)
            
            # 打开图片
            with Image.open(file_path) as img:
                # 获取原始尺寸
                original_width, original_height = img.size
                
                # 如果图片宽度超过max_width，按比例缩小
                if original_width > max_width:
                    ratio = max_width / original_width
                    new_height = int(original_height * ratio)
                    img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                    print(f"  调整尺寸: {original_width}x{original_height} -> {max_width}x{new_height}")
                
                # 转换为RGB模式（确保兼容性）
                if img.mode == 'RGBA':
                    # PNG转JPG时创建白色背景
                    if file_ext in {'.jpg', '.jpeg'}:
                        rgb_img = Image.new('RGB', img.size, (255, 255, 255))
                        rgb_img.paste(img, mask=img.split()[3])
                        img = rgb_img
                elif img.mode not in ('RGB', 'L'):
                    img = img.convert('RGB')
                
                # 确定输出路径
                if output_folder:
                    output_path = os.path.join(output_folder, filename)
                else:
                    # 使用临时文件避免直接覆盖
                    output_path = file_path + '.tmp'
                
                # 根据格式保存
                if file_ext in {'.jpg', '.jpeg'}:
                    img.save(output_path, 'JPEG', quality=quality, optimize=True, progressive=True)
                elif file_ext == '.png':
                    # PNG转为JPG可以大幅减少文件大小
                    # 如果你想保持PNG格式，取消下面的注释
                    img.save(output_path, 'PNG', optimize=True, compress_level=9)
                    # 或者转换为JPG（文件会更小）：
                    # output_path = os.path.splitext(output_path)[0] + '.jpg'
                    # if img.mode == 'RGBA':
                    #     rgb_img = Image.new('RGB', img.size, (255, 255, 255))
                    #     rgb_img.paste(img, mask=img.split()[3])
                    #     img = rgb_img
                    # img.save(output_path, 'JPEG', quality=quality, optimize=True)
                elif file_ext == '.webp':
                    img.save(output_path, 'WEBP', quality=quality, method=6)
                else:
                    # 其他格式转为JPEG
                    output_path = os.path.splitext(output_path)[0] + '.jpg'
                    img.save(output_path, 'JPEG', quality=quality, optimize=True)
                
                # 如果没有指定输出文件夹，替换原文件
                if not output_folder:
                    os.replace(output_path, file_path)
                    output_path = file_path
                
                # 计算压缩结果
                compressed_size = os.path.getsize(output_path)
                reduction = ((original_size - compressed_size) / original_size) * 100
                
                total_original += original_size
                total_compressed += compressed_size
                processed_count += 1
                
                print(f"✓ {filename}: {original_size/1024:.1f}KB -> {compressed_size/1024:.1f}KB (减少 {reduction:.1f}%)")
                
        except Exception as e:
            print(f"✗ {filename}: 处理失败 - {str(e)}")
    
    # 显示总计
    if processed_count > 0:
        total_reduction = ((total_original - total_compressed) / total_original) * 100
        print(f"\n{'='*60}")
        print(f"处理完成！共处理 {processed_count} 个文件")
        print(f"总大小: {total_original/1024/1024:.2f}MB -> {total_compressed/1024/1024:.2f}MB")
        print(f"总共减少: {total_reduction:.1f}% ({(total_original-total_compressed)/1024/1024:.2f}MB)")

# 使用示例
if __name__ == "__main__":
    # 方式1: 覆盖原文件，质量75，最大宽度1920px
    compress_images(
        input_folder="./img",
        quality=75,
        max_width=1920
    )
    
    # 方式2: 输出到新文件夹
    # compress_images(
    #     input_folder="./images",
    #     output_folder="./compressed_images",
    #     quality=75,
    #     max_width=1920
    # )
    
    # 方式3: 更激进的压缩（质量60，最大宽度1200px）
    # compress_images(
    #     input_folder="./images",
    #     output_folder="./compressed_images",
    #     quality=60,
    #     max_width=1200
    # )