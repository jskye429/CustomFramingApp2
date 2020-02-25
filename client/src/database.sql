-- DROP DATABASE IF EXISTS frame_db;
-- CREATE database frame_db;

-- USE frame_db;

-- CREATE TABLE frames (
--   sku INT NOT NULL,
--   series VARCHAR(100) NULL,
--   finish VARCHAR(100) NULL,
--   height INT NOT NULL,
--   width  INT NOT NULL,
--   catalog_page VARCHAR(100),
--   price_per_foot VARCHAR(100),

--   PRIMARY KEY (SKU)
-- );

-- SELECT * FROM frames;

-- INSERT INTO frames(sku,series,finish,height,width,catalog_page,price_per_foot)
-- VALUES('24301','Black','06','Matt Black','1 7/8','2 1/2','H-3','7')
-- VALUES('24401','Black','Matt Black','1.375','3','H-3','10')
-- VALUES('24601','Black','Matt Black','1.5','2''H-3','7')


-- -- INSERT INTO Customer (FirstName, LastName, City, Country, Phone)
-- -- VALUES ('Craig', 'Smith', 'New York', 'USA', 1-01-993 2800)

-- -- LOAD DATA INFILE 'desktop/BootCampNW/CustomFramingApp/frameSKU.csv'
-- -- INTO TABLE frames
-- -- FIELDS TERMINATED BY ','
-- -- ENCLOSED BY '"'
-- -- LINES TERMINATED BY '\n'
-- -- IGNORE 1 ROWS;