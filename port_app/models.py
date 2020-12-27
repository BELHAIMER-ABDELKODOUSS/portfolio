from django.db import models

# Create your models here.


class Skills(models.Model):
    name = models.CharField(max_length=50, null=False, blank=False)
    stacks = [('FrontEnd', 'FrontEnd'), ('BackEnd', 'BackEnd')]
    stack = models.CharField(max_length=50, choices=stacks, default='FrontEnd')
    colorNum = models.IntegerField(null=False, blank=False, default=0)

    def __str__(self):
        return self.name


class SubSkills(models.Model):
    skill = models.ForeignKey(Skills, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, null=False, blank=False)

    def __str__(self):
        return self.name


class Tech(models.Model):
    name = models.CharField(max_length=50, null=False, blank=False)
    stacks = [('FrontEnd', 'FrontEnd'), ('BackEnd', 'BackEnd')]
    stack = models.CharField(max_length=50, choices=stacks, default='FrontEnd')

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name


class Projects(models.Model):
    title = models.CharField(max_length=50, null=False, blank=False)
    description = models.TextField()
    tech = models.ManyToManyField(
        Tech, symmetrical=False, related_name='children')
    image = models.ImageField(null=False, blank=False, default='Image')

    def listFront(self):
        return self.tech.filter(stack='FrontEnd')

    def listBack(self):
            return self.tech.filter(stack='BackEnd')

    def __str__(self):
        return self.title


class Contact(models.Model):
    firstName = models.CharField(max_length=50, null=False, blank=False)
    lastName = models.CharField(max_length=50, null=False, blank=False)
    email = models.EmailField(null=False, blank=False)
    message = models.TextField(null=False, blank=False)

    def __str__(self):
        return self.firstName
