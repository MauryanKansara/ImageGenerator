# Generated by Django 4.2.5 on 2023-10-09 17:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_remove_generatedimage_image_url_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='prompt',
            name='user',
        ),
        migrations.DeleteModel(
            name='GeneratedImage',
        ),
        migrations.DeleteModel(
            name='Prompt',
        ),
    ]
