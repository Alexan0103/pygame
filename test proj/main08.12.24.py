import pygame
from math import sqrt
def dist(x1, y1, x2, y2):
    dx = x2 - x1
    dy = y2 - y1
    return sqrt(dx**2 + dy**2)

# pygame setup
pygame.init()
screen_width, screen_height = 1280, 710
screen = pygame.display.set_mode((screen_width, screen_height))
clock = pygame.time.Clock()
running = True
dt = 0

player_pos = pygame.Vector2(screen.get_width() / 2, screen.get_height() / 2)


while running:
    # poll for events
    # pygame.QUIT event means the user clicked X to close your window
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # fill the screen with a color to wipe away anything from last framedd
    screen.fill("purple")

    pygame.draw.circle(screen, "black", (480, 500), 20)
    pygame.draw.circle(screen, "black", (125, 175), 20)
    pygame.draw.circle(screen, "black", (350, 250), 20)
    pygame.draw.circle(screen, "black", (880, 250), 20)
    pygame.draw.circle(screen, "black", (780, 500), 20)
    pygame.draw.circle(screen, "black", (1080, 175), 20)
    pygame.draw.circle(screen, "red", player_pos, 40)

    if dist(*player_pos, 125, 175) <= 55:
        player_pos = pygame.Vector2(screen.get_width() / 2, screen.get_height() / 2)
    if dist(*player_pos, 350, 250) <= 55:
        player_pos = pygame.Vector2(screen.get_width() / 2, screen.get_height() / 2)
    if dist(*player_pos, 880, 250) <= 55:
        player_pos = pygame.Vector2(screen.get_width() / 2, screen.get_height() / 2)
    if dist(*player_pos, 1080, 175) <= 55:
        player_pos = pygame.Vector2(screen.get_width() / 2, screen.get_height() / 2)
    if dist(*player_pos, 780, 500) <= 55:
        player_pos = pygame.Vector2(screen.get_width() / 2, screen.get_height() / 2)
    if dist(*player_pos, 480, 500) <= 55:
            player_pos = pygame.Vector2(screen.get_width() / 2, screen.get_height() / 2)

    keys = pygame.key.get_pressed()

    if keys[pygame.K_w]:
        player_pos.y -= 300 * dt
    if keys[pygame.K_s]:
        player_pos.y += 300 * dt
    if keys[pygame.K_a]:
        player_pos.x -= 300 * dt
    if keys[pygame.K_d]:
        player_pos.x += 300 * dt

    if player_pos.x > screen_width:
        player_pos.x = 0  # Возврат на левую границу
    elif player_pos.x < 0:
        player_pos.x = screen_width  # Возврат на правую границу
    if player_pos.y > screen_height:
        player_pos.y = 0  # Возврат на верхнюю границу
    elif player_pos.y < 0:
        player_pos.y = screen_height  # Возврат на нижнюю границу



    # flip() the display to put your work on screen
    pygame.display.flip()
    # limits FPS to 60
    # dt is delta time in seconds since last frame, used for framerate-
    # independent physics.
    dt = clock.tick(60) / 1000

pygame.quit()
