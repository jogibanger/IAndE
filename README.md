 protected void btnSubmit_Click(object sender, EventArgs e)
        {
            if (fileUpload.HasFiles)
            {
                fileUpload.SaveAs(@"C:\Project\Testing\FileUpload\FileUpload\ImagePath\" + "test.jpeg");
            }
            else
            {
                Bitmap image1 = new Bitmap(@"C:\Project\Testing\FileUpload\FileUpload\ImagePath\" + "test.jpeg", true);
                this.Save(image1, 100, 100, 10, @"C:\Project\Testing\FileUpload\FileUpload\ImagePath\" + "test1.jpeg");
            }
        }
        public void Save(Bitmap image, int maxWidth, int maxHeight, int quality, string filePath)
        {
           
            // Get the image's original width and height
            int originalWidth = image.Width;
            int originalHeight = image.Height;

            // To preserve the aspect ratio
            float ratioX = (float)maxWidth / (float)originalWidth;
            float ratioY = (float)maxHeight / (float)originalHeight;
            float ratio = Math.Min(ratioX, ratioY);

            // New width and height based on aspect ratio
            int newWidth = (int)(originalWidth /2);
            int newHeight = (int)(originalHeight /2);

            // Convert other formats (including CMYK) to RGB.
            Bitmap newImage = new Bitmap(newWidth, newHeight, PixelFormat.Format24bppRgb);

            // Draws the image in the specified size with quality mode set to HighQuality
            using (Graphics graphics = Graphics.FromImage(newImage))
            {
                graphics.CompositingQuality = CompositingQuality.HighQuality;
                graphics.InterpolationMode = InterpolationMode.HighQualityBicubic;
                graphics.SmoothingMode = SmoothingMode.HighQuality;
                graphics.DrawImage(image, 0, 0, newWidth, newHeight);
            }

            // Get an ImageCodecInfo object that represents the JPEG codec.
            ImageCodecInfo imageCodecInfo = this.GetEncoderInfo(ImageFormat.Jpeg);

            // Create an Encoder object for the Quality parameter.
            Encoder encoder = Encoder.Quality;

            // Create an EncoderParameters object. 
            EncoderParameters encoderParameters = new EncoderParameters(1);

            // Save the image as a JPEG file with quality level.
            EncoderParameter encoderParameter = new EncoderParameter(encoder, quality);
            encoderParameters.Param[0] = encoderParameter;
            newImage.Save(filePath, imageCodecInfo, encoderParameters);

            byte[] testData= this.ConvertToImageBASE64(@"C:\Project\Testing\FileUpload\FileUpload\ImagePath\" + "test1.jpeg");
        }
        private ImageCodecInfo GetEncoderInfo(ImageFormat format)
        {
            return ImageCodecInfo.GetImageDecoders().SingleOrDefault(c => c.FormatID == format.Guid);
        }

        private byte[] ConvertToImageBASE64(string Path)
        {

            using (System.Drawing.Image image = System.Drawing.Image.FromFile(Path))
            {
                using (MemoryStream m = new MemoryStream())
                {
                    image.Save(m, image.RawFormat);
                    byte[] imageBytes = m.ToArray();

                    // Convert byte[] to Base64 String
                   // string base64String = Convert.ToBase64String(imageBytes);
                    return imageBytes;
                }
            }
        }
