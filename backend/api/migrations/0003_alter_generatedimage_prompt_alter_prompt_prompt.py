# Generated by Django 4.2.5 on 2023-09-16 10:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_prompt_user_alter_prompt_prompt_generatedimage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='generatedimage',
            name='prompt',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.prompt'),
        ),
        migrations.AlterField(
            model_name='prompt',
            name='prompt',
            field=models.CharField(max_length=100),
        ),
    ]
