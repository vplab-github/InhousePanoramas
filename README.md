# Inhouse Panoramic Semantic Segmentation Dataset

This repository contains an in-house indoor panoramic semantic segmentation dataset. It includes stitched wide-angle RGB panoramas, Supervisely-style polygon annotations, semantic segmentation masks, and a reproducible 80/10/10 train-validation-test split.

The dataset is designed for indoor panoramic scene understanding under realistic conditions: large fields of view, mixed image resolutions, stitched panorama artifacts, cluttered room layouts, small objects at long range, and long-tailed semantic class frequencies.

## Dataset Characteristics

| Characteristic | Value |
|---|---:|
| Total images | 120 |
| Semantic classes | 21 |
| Annotation type | Dense semantic segmentation + polygon annotations |
| Image formats | 75 PNG, 45 JPEG |
| Image width range | 405 to 13,712 px |
| Image height range | 101 to 3,744 px |
| Median resolution | 3,978 x 930 px |
| Total image pixels | 597.3 million |
| Labeled pixels | 337.5 million |
| Labeled pixel fraction | 56.51% |
| Unlabeled / ignore fraction | 43.49% |
| Annotation objects | 4,482 |
| Median objects per image | 32 |
| Mean objects per image | 37.35 |

The images are indoor stitched panoramas collected across scenes such as classrooms, halls, auditoria, offices, laboratory spaces, and domestic interiors. The panoramas are rectangular wide-angle stitched images rather than guaranteed full 360 x 180 equirectangular panoramas.

## Semantic Classes

The dataset uses 21 foreground semantic classes. Pixel value `0` is reserved for unlabeled or ignored pixels.

| ID | Class |
|---:|---|
| 1 | Roof |
| 2 | Bed |
| 3 | Obstructions |
| 4 | Refrigerator |
| 5 | Phone |
| 6 | wall |
| 7 | Furniture |
| 8 | Electronics |
| 9 | Floor |
| 10 | Monitor |
| 11 | Cabinet/Almirah |
| 12 | Door |
| 13 | Curtain |
| 14 | Pillow |
| 15 | Window |
| 16 | Misc(Rest) |
| 17 | Chair |
| 18 | Table |
| 19 | Boxes |
| 20 | Bag |
| 21 | Bottles |

Class metadata is stored in [`meta.json`](meta.json), and the class-ID mask mapping is stored in [`obj_class_to_machine_color.json`](obj_class_to_machine_color.json).

## Train, Validation, and Test Split

The released split is stored in [`dataset_split_80_10_10/`](dataset_split_80_10_10/).

| Split | Images | Percentage |
|---|---:|---:|
| Training | 96 | 80% |
| Validation | 12 | 10% |
| Testing | 12 | 10% |
| Total | 120 | 100% |

Each split contains matching files in four subdirectories:

```text
dataset_split_80_10_10/
  training/
    img/             RGB panorama images
    ann/             Supervisely-style annotation JSON files
    masks_human/     visual mask exports
    masks_machine/   class-ID semantic masks
  validation/
    img/
    ann/
    masks_human/
    masks_machine/
  testing/
    img/
    ann/
    masks_human/
    masks_machine/
  split_manifest.json
```


## Class Distribution

The dataset is intentionally imbalanced, reflecting realistic indoor semantic segmentation. The most frequent pixel categories are:

| Class | Pixels | Pixel Share | Images Present |
|---|---:|---:|---:|
| unlabeled/ignore | 259,783,002 | 43.49% | 116 |
| wall | 94,728,597 | 15.86% | 97 |
| Chair | 43,240,014 | 7.24% | 65 |
| Floor | 39,088,095 | 6.54% | 89 |
| Misc(Rest) | 20,034,535 | 3.35% | 78 |
| Roof | 19,122,478 | 3.20% | 54 |
| Obstructions | 17,797,257 | 2.98% | 49 |
| Boxes | 16,569,818 | 2.77% | 22 |
| Window | 15,338,463 | 2.57% | 55 |
| Door | 14,745,445 | 2.47% | 68 |

Rare classes include Bottles, Bed, Pillow, Refrigerator, Phone, and Monitor. These classes make the dataset useful for evaluating segmentation performance under class imbalance, especially with per-class IoU metrics.

## Annotation Format

Annotations are provided in two complementary forms:

- `ann/`: Supervisely-style JSON files containing polygon annotations, object classes, image dimensions, and annotation metadata.
- `masks_machine/`: machine-readable semantic masks where pixel values correspond to semantic class IDs.
- `masks_human/`: human-readable visual mask exports for inspection.

For training and evaluation, use the RGB images from `img/` and the class-ID masks from `masks_machine/`. Ignore pixels are encoded with value `0`.


## License and Citation

All rights reserved.